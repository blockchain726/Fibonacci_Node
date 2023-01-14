import React, { useState } from 'react';
import axios from 'axios';

const Fib = () => {

  const [input, setInput] = useState(0)
  const [ticket, setTicket] = useState(0)

  async function fetchValue() {
    const res = await axios.get('/api/output', { params: { ticket: ticket } });
    alert("Fibonacci value is " + res.data)
  }

  const handleSubmit = async () => {

    const res = await axios.post('/api/input', {
      index: input
    });
    alert("Ticket is " + res.data.ticket)

  };


  return (
    <div>
      Input: <input value={input} onChange={(e) => { setInput(e.target.value) }} type="number" /> <button onClick={() => { handleSubmit() }}>Calc</button><br />
      Ticket: <input value={ticket} onChange={(e) => { setTicket(e.target.value) }} type="number" /> <button onClick={() => { fetchValue() }}>Get ticket</button>
    </div>
  );

}

export default Fib;
