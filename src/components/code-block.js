// import  { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/solarized-dark';
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/an-old-hope';

const CodeBlock = ({children, className, ...rest}) => {
  // const language = className.replace(/language-/, '')
  const parts = className.split('-')
  const language = parts[1]
  const line_numbers = parts.length==3 && parts[2]==='lines_numbers'
  // const language = className ? className.replace(/language-/, '') : 'text'
  const style = {...theme}
  style.hljs.borderRadius = "10px"
  style.hljs.paddingLeft = "20px"
  style.hljs.paddingTop = "20px"
  // style.hljs.backgroundColor="red"
  return (
    <SyntaxHighlighter language={language} style={style} showLineNumbers={line_numbers} {...rest} >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock














// import React from 'react'
// import Highlight, {defaultProps} from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/shadesOfPurple'

// const CodeBlock = ({children, className}) => {
//   const language = className.replace(/language-/, '')
//   console.log('children')
//   console.log(children)
//   return (
//     <Highlight {...defaultProps}  theme={theme} code={children} language={language}>
//       {({className, style, tokens, getLineProps, getTokenProps}) => (
//         <pre className={className} style={{...style, padding: '20px', borderRadius:'5px'}}>
//           {tokens.map((line, i) => (
//             <div key={i} {...getLineProps({line, key: i})}>
//               {line.map((token, key) => (
//                 <span key={key} {...getTokenProps({token, key})} />
//               ))}
//             </div>
//           ))}
//         </pre>
//       )}
//     </Highlight>
//   )
// }

// export default CodeBlock

