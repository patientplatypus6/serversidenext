// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
// import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
    // <SyntaxHighlighter language={props.language} style={docco}>
    //   {props.code}
    // </SyntaxHighlighter>
// SyntaxHighlighter.registerLanguage('javascript', js);

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
// import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

// SyntaxHighlighter.registerLanguage('javascript', js);

const Highlightcode = (props) => {
  console.log('value of props: ', props)
  return (
    <div style={{maxWidth: '100%', }}>
      <SyntaxHighlighter language={props.language} style={docco}>
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Highlightcode;