import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const {
      name_one,
      name_two,
      email_one,
      email_two,
      phone_one,
      phone_two,
      number_of_people,
      is_snu_student,
      total_amount,
      transaction_id,
      qr_code_id
    } = req.body;

    // Validate required fields
    if (!name_one || !email_one || !phone_one || !number_of_people || 
        !total_amount || !transaction_id || is_snu_student === undefined) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name_one', 'email_one', 'phone_one', 'number_of_people', 'total_amount', 'transaction_id', 'is_snu_student']
      });
    }

    // Validate number of people
    if (![1, 2].includes(number_of_people)) {
      return res.status(400).json({ error: 'Number of people must be 1 or 2' });
    }

    // Validate that if number_of_people is 2, second person's details are provided
    if (number_of_people === 2 && (!name_two || !email_two || !phone_two)) {
      return res.status(400).json({ 
        error: 'Second person details required for 2 people registration' 
      });
    }

    // Insert payment record
    const { data, error } = await supabase
      .from('payments')
      .insert({
        name_one,
        name_two: name_two || null,
        email_one,
        email_two: email_two || null,
        phone_one,
        phone_two: phone_two || null,
        number_of_people,
        is_snu_student,
        total_amount,
        transaction_id: transaction_id.trim(),
        qr_code_id: qr_code_id || null,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating payment:', error);
      
      // Handle duplicate transaction ID
      if (error.code === '23505' && error.message.includes('transaction_id')) {
        return res.status(400).json({ 
          error: 'This transaction ID has already been used. Please check your transaction ID.' 
        });
      }
      
      return res.status(500).json({ error: 'Failed to create payment record' });
    }

    res.status(201).json({ 
      message: 'Payment submitted successfully',
      payment: data 
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}