
 import { __ } from '@wordpress/i18n';

 import { useBlockProps } from '@wordpress/block-editor';
 import './editor.scss';
 
  export default function Edit( {} ) {
     return (
         <div { ...useBlockProps() }>
           <h1  { ...useBlockProps }>Hello Murad!</h1>
         </div>
     );
 }
 