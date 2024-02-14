import { SVGProps } from 'react';
const FitLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={29} height={28} fill='none' {...props}>
        <path
            fill='#10239E'
            d='M24.245 9.207h3.463v3.732h-3.463v7.13c0 2.428.15 2.42.45 2.705.301.284.902.426 1.804.426.3.036.564 0 .864-.035.263 0 .627-.202.814-.391v3.91c-.47.2-1.002.426-1.528.426-.563.035-1.09.035-1.615.035-.035 0-.63 0-.88-.035-.61-.087-1.518-.409-2.082-.729-.313-.178-1.127-.977-1.22-1.333-.282-.444-.44-1.315-.44-2.239v-9.87h-3.318V9.207h3.319v-6.22h3.832v6.22Z'
        />
        <path
            fill='#10239E'
            fillRule='evenodd'
            d='M.563 12.939h2.63v13.78h4.208v-13.78h3.119V9.207H7.4v-.32c0-.746.15-1.455.451-1.775.3-.32.827-.498 1.578-.498.676 0 1.315.036 1.954.107V2.987H8.547c-1.784 0-3.193.861-4.039 1.688-1.09 1.067-1.315 2.293-1.315 3.892v.64H.563v3.732Zm15.404 1.599h-4.095v12.18h4.095v-12.18Z'
            clipRule='evenodd'
        />
        <path
            fill='#40A9FF'
            d='M15.967 11.108a1.97 1.97 0 0 1-1.972 1.96 1.97 1.97 0 0 1-1.973-1.96c0-1.082.89-1.96 1.973-1.96a1.97 1.97 0 0 1 1.972 1.96Z'
        />
    </svg>
);
export default FitLogo;