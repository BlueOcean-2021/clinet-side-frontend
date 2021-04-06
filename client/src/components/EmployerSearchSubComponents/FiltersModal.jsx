/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 90vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    max-width: 35vw;
  }
`;

const Options = styled.div`
  max-height: 95vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 95vh;
`;

// const RangeLabel = styled.label`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

const Legend = styled.legend`
  color: #424242;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  margin: 1vh 0;
  width: 95%;

  // @media (min-width: 768px) {
  //   justify-content: space-between;
  // }
`;

// const Figures = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

// const Figure = styled.div`
//   flex-basis: 1;
//   text-align: center;
//   width: 2.5vw;
// `;

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  top: 2px;
  border-radius: 50%;
  background-color: #fff;

  position: relative;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #424242;
  &:checked {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: relative;
    top: 2px;
    background-color: #5fa317;
    background-clip: content-box;
    padding: 1px;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #424242;
  }
  &:focus { outline: none; }
`;

// const Range = styled.input`
// /*Chrome*/
//   -webkit-appearance: none;
//   overflow: hidden;
//   width: 100%;
//   background-color: #e0e0e0;

//   ::-webkit-slider-runnable-track {
//     -webkit-appearance: none;
//     height: 10px;
//     color: #5fa317;
//     margin-top: -1px;
//   }
//   ::-webkit-slider-thumb {
//     width: 10px;
//     -webkit-appearance: none;
//     height: 20px;
//     cursor: ew-resize;
//     background: #424242;
//     box-shadow: -600px 0 0 600px #5fa317;
//   }
// /** FF*/
//   ::-moz-range-progress {
//     background-color: #424242;
//   }
//   ::-moz-range-track {
//     background-color: #e0e0e0;
//   }
// /* IE*/
//   ::-ms-fill-lower {
//     background-color: #e0e0e0;
//   }
//   ::-ms-fill-upper {
//     background-color: #5fa317;
//   }
// }
// `;

const Button = styled.button`
  width: max(10vw, 150px);
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
`;

class FiltersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearsExperience: '',
      // range: {
      //   min: 0,
      //   max: 120000,
      // },
      educationLevel: '',
      // desiredSalary: 0,
    };
    this.expanded = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.id;
    const { value } = event.target;

    this.setState({
      [field]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggleModal();
  }

  render() {
    const { yearsExperience, educationLevel } = this.state;

    return ReactDOM.createPortal(
      <Wrapper onMouseDown={(event) => event.stopPropagation()}>
        <Options>
          <Form onSubmit={this.handleSubmit}>
            <FieldSet onChange={this.handleChange}>
              <Legend>Years of Experience</Legend>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="0–2" />
                0–2
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="3–5" />
                3–5
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="6–9" />
                6–9
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="10+" />
                10+
              </label>
            </FieldSet>
            <FieldSet onChange={this.handleChange}>
              <Legend>Level of Education</Legend>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="diploma" />
                Diploma
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="associates" />
                Associates
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="bachelors" />
                Bachelors
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="masters" />
                Masters
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="phd" />
                PhD
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="other" />
                other
              </label>
            </FieldSet>
            {/* <FieldSet>
              <Legend>Desired Salary</Legend>
              <RangeLabel htmlFor="desiredSalary">
                <Figures><Figure>0k</Figure><Figure>10</Figure><Figure>20</Figure><Figure>30</Figure><Figure>40</Figure><Figure>50</Figure><Figure>60</Figure><Figure>70</Figure><Figure>80</Figure><Figure>90</Figure><Figure>100</Figure><Figure>110</Figure><Figure>120k+</Figure></Figures>
                <Range id="desiredSalary" type="range" min={min} max={max} value={desiredSalary} step="10000" onChange={this.handleChange} />
              </RangeLabel>
            </FieldSet> */}
            <Button type="submit" value="Filter Results">Filter Results</Button>
          </Form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default FiltersModal;