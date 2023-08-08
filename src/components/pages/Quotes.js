import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuote, deleteQuote } from './redux/actions';
import QuoteCard from './QuoteCard';

const Quotes = () => {
  const quotes = useSelector(state => state.quotes);
  const dispatch = useDispatch();

  const [quoteForm, setQuoteForm] = useState({
    quote: '',
    name: '',
    country: '',
    type: '',
  });

  const handleAddQuote = () => {
    dispatch(addQuote({ ...quoteForm }));
    setQuoteForm({
      quote: '',
      name: '',
      country: '',
      type: '',
    });
  };

  const handleDeleteQuote = (quoteId) => {
    const confirmDelete = window.confirm('Do you really want to delete this quote?');
    if (confirmDelete) {
      dispatch(deleteQuote(quoteId));
    }
  };

  return (
    <div>
      <h1>Quotes</h1>
      <div className="quote-form">
        <input
          type="text"
          placeholder="Quote"
          value={quoteForm.quote}
          onChange={e => setQuoteForm({ ...quoteForm, quote: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={quoteForm.name}
          onChange={e => setQuoteForm({ ...quoteForm, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country"
          value={quoteForm.country}
          onChange={e => setQuoteForm({ ...quoteForm, country: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={quoteForm.type}
          onChange={e => setQuoteForm({ ...quoteForm, type: e.target.value })}
        />
        <button onClick={handleAddQuote}>Add Quote</button>
      </div>
      <div className="quote-list">
        {quotes.map((quote, index) => (
          <QuoteCard
            key={index}
            quote={quote}
            onDelete={() => handleDeleteQuote(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Quotes;
