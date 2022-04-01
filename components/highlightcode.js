import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const Highlightcode = (props) => {
  console.log('value of props: ', props)
  return (
    <div style={{maxWidth: '100%', }}>
      <SyntaxHighlighter 
      wrapLines={true} 
      language={props.language} 
      style={docco}
      wrapLongLines
      lineNumberStyle
      lineProps={lineNumber => {
        let style = {
          display: 'inline-block', 
          // textAlign: 'left',
          float: 'left', 
          fontSize: '1.25rem'
        }
        return{style}
      }}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Highlightcode;