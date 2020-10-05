import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function MoreQuestionsBtn({ count, setCount, questions }) {
  return (
    <span>
      <Button
        variant="outline-dark jgd-sharp-edge jgd-large-padded"
        size="lg"
        onClick={() => setCount(count + 2)}
        disabled={count >= questions.length}
      >
        <span className="jgd-small-bold">
          MORE ANSWERED QUESTIONS
        </span>
      </Button>
      {' '}
    </span>
  );
}

export default MoreQuestionsBtn;