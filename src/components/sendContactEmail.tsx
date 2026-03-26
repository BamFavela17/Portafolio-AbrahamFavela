import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string; 
  title: string; 
  message: string;
  [key: string]: unknown; 
}

export const sendContactEmail = async (data: EmailParams) => {
  const SERVICE_ID = 'service_2rl0y4p';
  const TEMPLATE_ID = 'template_rl4liax'; 
  const PUBLIC_KEY = 'mOIoiYHXZAjIELY3r';

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      data,
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
};