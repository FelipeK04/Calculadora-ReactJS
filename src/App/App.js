import React, {useState, useEffect, memo} from 'react'
import {Ul, Container, SpanValue, SpanMemory, Display, Header, Footer, ContainerCalc } from './style/style';
import GlobalStyle from './style/global'

import Button from './Button'
import commafy from './commafy';

import git from '../assets/imgs/git.svg';

export default function Calculator() {

const [value, setValue] = useState('0');
const [memory, setMemory] = useState(null);
const [operator, setOperator] = useState(null);

function addDigit(e) {
  const number = parseFloat(value);

  if (value === NaN || value === Infinity) {
    setValue('0');
    setMemory();
    setOperator();
  }

  if (e === 'AC') {
    setValue('0');
    setMemory(null);
    setOperator(null);
    return;
  }

  if (e === 'C') {
    if (value.length >= 2) {
      setValue((value.slice(0, -1)))
    } else if (value.length <= 1) {
      setValue('0');
    }
    return
  }

  if (e === '±') {
    setValue((number * -1).toString());
    return
  }

  if (e === '.') {
    if (value.includes('.')) return;

    setValue(value + '.');
    return;
  }

  if (e === '%') {
    if (operator === null) return

    if (operator !== null) {
      setOperator(e)
      if (operator === '*') {
        if (number === 0) {
          return 
        }
        setValue(((number / 100) * memory).toString());
        setMemory(null);
        setOperator(null);
      } else if (operator === '-') {
        if (number === 0) {
          return 
        }
        setValue((Math.round(memory * (1 - (number / 100)))).toString());
        setMemory(null);
        setOperator(null);
      } else if (operator === '+') {
        if (number === 0) {
          return 
        }
        setValue((memory * (number / 100 + 1)).toString());
        setMemory(null);
        setOperator(null)
      } else if (operator === '/') {
        if (number === 0) return;
        setValue(((memory / number) * 100).toString());
        setMemory(null);
        setOperator(null);
      }
    } else {
      setMemory(number)
    }

    return
  }

  if ((e === '+') || (e === '-') || (e === '/') ||( e === '*')) {
    if (operator !== null) {
      setOperator(e);
      if (operator === '+') {
        if (number === 0) {
          return
         }
        setMemory(memory + number);
        setOperator('+')
        setValue('0')

      } else if (operator === '-') {
        if (number === 0) {
          return
         }
        setMemory(memory - number); 
        setOperator('-')
        setValue('0') 
      } else if (operator === '/') {
        if (number === 0) {
         return
        }
        setMemory(memory / number);
        setOperator('/')
        setValue('0')
      } else if (operator === '*') {
        if (number === 0) {
          return
         }
        setMemory(memory * number);
        setOperator('*')
        setValue('0')
      }
    } else {
      setMemory(number);
      setOperator(e);
      setValue('0')
      
    }
    setOperator(e);
    setValue('0')

    return
  }

  if (e === '=') {
    if (!operator) return;

    if (operator === "+") {
      setValue((memory + number).toString());
    } else if (operator === "-") {
      setValue((memory - number).toString());
    } else if (operator === "*") {
      setValue((memory * number).toString());
    } else if (operator === "/") {
      setValue((memory / number).toString());
    }

    setMemory(null);
    setOperator(null);
    return;
  }

  if (value[value.length - 1] === ".") {
    setValue(value + e);
  } else {
    setValue(parseFloat(number + e).toString());
  }
  

}

useEffect(() => {
  function handleKey(e) {
    let {key} = e;
    let {} = e;
    let number = parseFloat(value);

    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
      addDigit(key)    
    }

    if (key === 'Backspace') {
      if (value.length >= 2) {
        setValue((value.slice(0, -1)))
      } else if (value.length <= 1) {
        setValue('0')
      }
      return
    }

    if (key === 'Enter') {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + number).toString());
      } else if (operator === "-") {
        setValue((memory - number).toString());
      } else if (operator === "*") {
        setValue((memory * number).toString());
      } else if (operator === "/") {
        setValue((memory / number).toString());
      }
  
      setMemory(null);
      setOperator(null);
      return;
    }
  
    if ((e.code === "NumpadAdd") || (e.code === "NumpadSubtract")|| (e.code === "NumpadMultiply") || (e.code === "NumpadDivide") || (e.keyCode === 53)) {
      addDigit(key)
    }

    if ((e.keyCode === 188) || (e.keyCode === 190) || (e.keyCode === 110)) {
      if (value.includes('.')) return;

      setValue(value + '.');
      return;
    }
  }



  document.addEventListener('keydown', handleKey)

  return () => document.removeEventListener('keydown', handleKey)
})

 
  return (
    <>
      <GlobalStyle />
    <Container>
      <Header>
        <h1>Calculadora ReactJS</h1>
      </Header>
    <ContainerCalc>
      <Display >
        <SpanMemory>{memory} {operator}</SpanMemory>
        <SpanValue>{commafy(value)}</SpanValue>
      </Display>
      <Ul>
        <Button label="7" click={() => addDigit('7')} />
        <Button label="8" click={() => addDigit('8')} />
        <Button label="9" click={() => addDigit('9')} />
        <Button label="/" click={() => addDigit('/')} />
        <Button label="*" click={() => addDigit('*')} />
        <Button label="4" click={() => addDigit('4')} />
        <Button label="5" click={() => addDigit('5')} />
        <Button label="6" click={() => addDigit('6')} />
        <Button label="-" click={() => addDigit('-')} />
        <Button label="+" click={() => addDigit('+')} />
        <Button label="1" click={() => addDigit('1')} />
        <Button label="2" click={() => addDigit('2')} />
        <Button label="3" click={() => addDigit('3')} />
        <Button label="±" click={() => addDigit('±')} />
        <Button label="%" click={() => addDigit('%')} />
        <Button label="0" click={() => addDigit('0')} />
        <Button label="." click={() => addDigit('.')}/>
        <Button label="C" click={() => addDigit('C')} />
        <Button label="AC" click={() => addDigit('AC')} />
        <Button label="=" click={() => addDigit('=')} />
      </Ul>
    </ContainerCalc>
    <Footer>
      <a href="https://github.com/xXRetr0Xx-BR" target="_blank" ><p>xXRetr0Xx (FK)</p> <img src={git} alt=""  /></a>
    
      
    </Footer>
    </Container>
    </>
  )
}