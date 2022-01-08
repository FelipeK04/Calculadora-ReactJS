import React, {useState, useEffect, memo} from 'react'
import {Ul, Container, SpanValue, SpanMemory, Input} from './style/style'

import Button from './Button'
import commafy from './commafy';


export default function Calculator() {

const [value, setValue] = useState("0");
const [memory, setMemory] = useState(null);
const [operator, setOperator] = useState(null);

function addDigit(e) {
  const num = parseFloat(value);

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
      setValue('0')
    }
    return
  }

  if (e === '±') {
    setValue((num * -1).toString());
    return
  }

  if (e === '%') {
    let percent = (num / 100) * memory;
    let increase = (memory * (num / 100 + 1));
    let decrease = Math.round(memory * (1 - (num / 100 ))).toFixed(0);

    if (operator !== null) {
      if (operator === '*') {
        setValue((percent).toString());
        setMemory(null)
        setOperator(null)
      } else if (operator === '+') {
        setValue((increase).toString())
        setMemory(null)
        setOperator(null)
      } else if (operator === '/') {
        setValue((decrease).toString())
        setMemory(null)
        setOperator(null)
      }
    } else {
      setMemory(parseFloat(value))
    }
    
    return
  }

  if (e === '.') {
    if (value.includes('.')) return;

    setValue(value + '.');
    return;
  }

  if (e === '+') {
    if (operator !== null) {
      if (operator === '+') {
        setMemory(memory + parseFloat(value));
      } else if (operator === '-') {
        setMemory(memory - parseFloat(value));
      } else if (operator === '*') {
        setMemory(memory * parseFloat(value));
      } else if (operator === '/') {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    setValue('0');
    setOperator('+')
    return;
  }

  if (e === '-') {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "*") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "/") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    setValue("0");
    setOperator("−");
    return;
  }

  if (e === "*") {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "*") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "/") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    setValue("0");
    setOperator("*");
    return;
  }

  if (e === "/") {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "*") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "/") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    setValue("0");
    setOperator("/");
    return;
  }

  if (e === "=") {
    if (!operator) return;

    if (operator === "+") {
      setValue((memory + parseFloat(value)).toString());
    } else if (operator === "−") {
      setValue((memory - parseFloat(value)).toString());
    } else if (operator === "*") {
      setValue((memory * parseFloat(value)).toString());
    } else if (operator === "/") {
      setValue((memory / parseFloat(value)).toString());
    }
    setMemory(null);
    setOperator(null);
    return;
  }

  if (value[value.length - 1] === ".") {
    setValue(value + e);
  } else {
    setValue(parseFloat(num + e).toString());
  }
};


useEffect(() => {
  function handleKey(e) {
    let {key} = e;

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
      setValue((memory + parseFloat(value)).toString());
    } else if (operator === "−") {
      setValue((memory - parseFloat(value)).toString());
    } else if (operator === "*") {
      setValue((memory * parseFloat(value)).toString());
    } else if (operator === "/") {
      setValue((memory / parseFloat(value)).toString());
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
    <Container>
      <Input>
        <SpanMemory>{memory} {operator}</SpanMemory>
        <SpanValue>{commafy(value)}</SpanValue>
      </Input>
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
    </Container>
  )
} 