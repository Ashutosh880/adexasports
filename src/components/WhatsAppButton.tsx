import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919826611105';
const WHATSAPP_MSG = encodeURIComponent('Hi Adexa Sports, I would like to know more about your sports programs.');

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5C] transition-all duration-300 hover:scale-110 whatsapp-pulse"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}
