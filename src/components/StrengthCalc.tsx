import React, { useState } from 'react';
import { Checkbox, Modal, Radio, Tooltip, type InputNumberProps, type RadioChangeEvent, type SelectProps } from 'antd';
import { Select } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import { InputNumber, Button } from 'antd';
import weightRatio from '../vars/ratios';
import { RWebShare } from 'react-web-share';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const { Option } = Select;

const getOptionsArray = (gradeType: string) => {
  let newOptionsArray: { value: number; label: string }[] = [];
  weightRatio.forEach((input) => {
    const gradeString = gradeType === 'Boulder' ? input.boulder : input.sport;
    if (
      newOptionsArray.filter((data) => {
        return data.label === gradeString;
      }).length < 1
    ) {
      newOptionsArray.push({
        value: input.value,
        label: gradeString,
      });
    }
  });
  return newOptionsArray;
};

const optionsBoulder: SelectProps['options'] = getOptionsArray('Boulder');
const optionsSport: SelectProps['options'] = getOptionsArray('Sport');

export default function StrengthCalc() {
  const [gradeSystem, setGradeSystem] = useState('Boulder');
  const [trainingSystem, setTrainingSystem] = useState('Hangboard');
  const [currentGrade, setCurrentGrade] = useState(weightRatio[0].value);
  const [targetGrade, setTargetGrade] = useState(weightRatio[1].value);
  const [weightScale, setWeightScale] = useState('kg');
  const [weight, setWeight] = useState(0);
  const [mvc, setMvc] = useState(0);
  const [result, setResult] = useState<React.JSX.Element[]>();
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [manualMvcEnabled, setManualMvcEnabled] = useState(false);

  const toggleMVC = () => {
    setManualMvcEnabled(!manualMvcEnabled);
  };

  const calcStrength = () => {
    // DATA VALIDATION
    let errorMessage = [];
    if (weight < 40) {
      errorMessage.push('⚠ Enter valid weight');
    }
    if (targetGrade <= currentGrade) {
      errorMessage.push('⚠ Target grade must be higher than current grade');
    }
    if (errorMessage.length > 0) {
      alert(errorMessage.join('\n'));
      return;
    }

    //MVC calc
    const estSingleHandMVC = Math.floor(weight * currentGrade);
    const trgtSingleHandMVC = Math.floor(weight * targetGrade);
    const actAddedWeight = manualMvcEnabled ? mvc : estSingleHandMVC * 2 - weight;
    const predictedAddedWeight = estSingleHandMVC * 2 - weight;
    const targetAddedWeight = trgtSingleHandMVC * 2 - weight;

    let output: React.JSX.Element[] = [];
    output.push(<br />);

    if (trainingSystem === 'Hangboard') {
      // Sub-body weight result
      if (actAddedWeight < 1) {
        output.push(<h6 className=" text-xl font-bold">You should be aiming to hang bodyweight!</h6>);
        if (targetAddedWeight > 0) {
          output.push(
            <>
              <br />
              <p>
                <h6 className="font-bold">Strength needed for target: </h6>
                Bodyweight +{`${targetAddedWeight}${weightScale}`}
              </p>
            </>
          );
        } else {
          output.push(
            <>
              <br />
              <p>
                Both your current grade and target grade require sub bodyweight finger strength. Focusing on technique
                will help you achieve your target, whilst strength training will help you progress faster.
              </p>
            </>
          );
        }
      }

      // More than body weight results
      if (actAddedWeight > 0) {
        if (manualMvcEnabled) {
          if (mvc < predictedAddedWeight) {
            output.push(
              <>
                <h4 className="text-xl font-bold">You are weak for your grade!</h4>
                <br />
              </>
            );
          }
          if (mvc === predictedAddedWeight) {
            output.push(
              <>
                <h4 className="text-xl font-bold">You are average for your grade!</h4>
                <br />
              </>
            );
          }
          if (mvc > predictedAddedWeight) {
            output.push(
              <>
                <h4 className="text-xl font-bold">You are strong for your grade!</h4>
                <br />
              </>
            );
          }
        }
        output.push(
          <>
            <h6 className="font-bold">Strength needed for current grade</h6>Bodyweight +
            {`${predictedAddedWeight > 0 ? predictedAddedWeight : 0}${weightScale}`}
          </>
        );

        output.push(
          <>
            <br />
            <br />
            <p>
              <h6 className="font-bold">Strength needed for target</h6>Bodyweight +
              {`${targetAddedWeight > 0 ? targetAddedWeight : 0}${weightScale}`}
            </p>
          </>
        );
      }
    }

    if (trainingSystem === 'LiftingPin') {
      if (manualMvcEnabled) {
        if (mvc < estSingleHandMVC) {
          output.push(
            <>
              <h4 className="text-xl font-bold">You are weak for your grade!</h4>
              <br />
            </>
          );
        }
        if (mvc === estSingleHandMVC) {
          output.push(
            <>
              <h4 className="text-xl font-bold">You are average for your grade!</h4>
              <br />
            </>
          );
        }
        if (mvc > estSingleHandMVC) {
          output.push(
            <>
              <h4 className="text-xl font-bold">You are strong for your grade!</h4>
              <br />
            </>
          );
        }
      }

      output.push(
        <>
          <h6 className="font-bold">Strength needed for current grade</h6>
          {`${estSingleHandMVC}${weightScale}`} single hand lift
        </>
      );

      output.push(
        <>
          <br />
          <br />
          <p>
            <h6 className="font-bold">Strength needed for target</h6>
            {`${trgtSingleHandMVC}${weightScale}`} single hand lift
          </p>
        </>
      );
    }

    output.push(
      <>
        <br />
        <br />
        <p style={{ color: 'grey' }}>ⓘ Results are based on a 20mm edge and 5s hang time</p>
        <br />
        <br />
      </>
    );
    setResult(output);
    setResultModalOpen(true);
  };

  const onWeightChange: InputNumberProps['onChange'] = (value) => {
    setWeight(parseInt((value ?? 0).toString()));
  };

  const onMvcChange: InputNumberProps['onChange'] = (value) => {
    setMvc(parseInt((value ?? 0).toString()));
  };

  const selectAfter = (
    <Select defaultValue="KG" value={weightScale} onChange={setWeightScale} style={{ width: 60 }}>
      <Option value="kg">kg</Option>
      <Option value="lb">lb</Option>
    </Select>
  );

  const onGradeChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setGradeSystem(e.target.value);
    if (e.target.value === 'Boulder') {
      setCurrentGrade(weightRatio[0].value);
      setTargetGrade(weightRatio[1].value);
    }
    if (e.target.value === 'Sport') {
      setCurrentGrade(weightRatio[0].value);
      setTargetGrade(weightRatio[1].value);
    }
  };

  const onTrainingChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    console.log(mvc);
    setTrainingSystem(e.target.value);
  };

  return (
    <>
      <center>
        <Container>
          <Row>
            <Col>
              <h4>Grading system</h4>
              <div style={{ minWidth: '250px' }}>
                <RadioGroup onChange={onGradeChange} defaultValue="Boulder" size="large">
                  <Tooltip title="Hueco (V grade)">
                    <RadioButton value="Boulder" style={{ marginBottom: '10px' }}>
                      Boulder
                    </RadioButton>
                  </Tooltip>
                  <Tooltip title="French (F grade)">
                    <RadioButton value="Sport">Sport</RadioButton>
                  </Tooltip>
                </RadioGroup>
              </div>
            </Col>
            <Col>
              <h4>Training tool</h4>
              <div style={{ minWidth: '250px' }}>
                <RadioGroup onChange={onTrainingChange} defaultValue="Hangboard" size="large">
                  <Tooltip title="Climber hangs two handed">
                    <RadioButton value="Hangboard" style={{ marginBottom: '10px' }}>
                      Hangboard
                    </RadioButton>
                  </Tooltip>
                  <Tooltip title="Climber lifts weight one handed">
                    <RadioButton value="LiftingPin">Crimp block</RadioButton>
                  </Tooltip>
                </RadioGroup>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col>
              <h4>Current grade</h4>
              <Select
                size="large"
                defaultValue={weightRatio[0].value}
                onChange={setCurrentGrade}
                style={{ width: 200, marginBottom: '10px' }}
                options={gradeSystem === 'Boulder' ? optionsBoulder : optionsSport}
                value={currentGrade}
              />
            </Col>
            <Col>
              <h4>Target grade</h4>
              <Select
                size="large"
                defaultValue={weightRatio[0].value}
                onChange={setTargetGrade}
                style={{ width: 200, marginBottom: '10px' }}
                options={gradeSystem === 'Boulder' ? optionsBoulder : optionsSport}
                value={targetGrade}
              />
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col>
              <h4>Body weight</h4>
              <InputNumber
                style={{ width: 200, marginBottom: '10px' }}
                value={weight}
                onChange={onWeightChange}
                min={1}
                max={999}
                addonAfter={selectAfter}
                defaultValue={0}
              />
              <br />
            </Col>
            <Col>
              {trainingSystem === 'Hangboard' ? (
                <>
                  <h4>
                    <Tooltip title="Weight added on a 20mm edge">Max hang </Tooltip>
                    <Checkbox
                      onClick={toggleMVC}
                      checked={manualMvcEnabled}
                      style={{ position: 'relative', top: '-1px' }}
                    />
                  </h4>
                  <InputNumber
                    disabled={!manualMvcEnabled}
                    style={{ width: 200, marginBottom: '10px' }}
                    addonBefore={'+'}
                    addonAfter={selectAfter}
                    defaultValue={0}
                    value={mvc}
                    onChange={onMvcChange}
                  />
                </>
              ) : (
                <>
                  <h4>
                    <Tooltip title="Heaviest lift using a 20mm edge">Max lift </Tooltip>
                    <Checkbox
                      onClick={toggleMVC}
                      checked={manualMvcEnabled}
                      style={{ position: 'relative', top: '-1px' }}
                    />
                  </h4>
                  <InputNumber
                    disabled={!manualMvcEnabled}
                    style={{ width: 200, marginBottom: '10px' }}
                    min={0}
                    max={999}
                    addonAfter={selectAfter}
                    defaultValue={0}
                    value={mvc}
                    onChange={onMvcChange}
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
        <hr />
        <br />
        <a onClick={calcStrength} className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Calculate strength!
        </a>
      </center>
      <Modal
        title="Results 🎉"
        centered
        open={resultModalOpen}
        onOk={() => setResultModalOpen(false)}
        onCancel={() => setResultModalOpen(false)}
        footer={[
          <RWebShare
            key={1}
            data={{
              text: 'How strong are you!? Calculate your finger strength',
              url: 'https://stronk-climbing.com',
              title: 'STRØNK - Finger strength test',
            }}
            onClick={() => console.log('shared successfully!')}
          >
            <Button>Share 🔗</Button>
          </RWebShare>,
          <Button key="link" href="/training/max-hangs" type="primary">
            Free training tool
          </Button>,
        ]}
      >
        {result}
      </Modal>
    </>
  );
}
