import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      text: 'The quality and design of these products are exceptional. They perfectly complement my minimalist aesthetic.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Architect',
      text: 'Outstanding craftsmanship and attention to detail. Every piece tells a story of simplicity and elegance.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Homeowner',
      text: 'I love how these products transformed my living space. Minimalist design at its finest!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
