import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { amount, is_snu } = req.query;

    // Determine QR code ID based on parameters
    let qrCodeId;
    if (is_snu === 'true') {
      qrCodeId = 'snu_750';
    } else {
      qrCodeId = 'regular_1300';
    }

    const { data, error } = await supabase
      .from('payment_qr_codes')
      .select('*')
      .eq('id', qrCodeId)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Error fetching QR code:', error);
      return res.status(404).json({ error: 'QR code not found' });
    }

    res.status(200).json({ qr_code: data });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}