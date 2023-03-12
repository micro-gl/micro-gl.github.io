import React from 'react'
import Highlight, { 
  defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
// import vsLight from 'prism-react-renderer/themes/dracula'
// import vsLight from 'prism-react-renderer/themes/shadesOfPurple'
import vsLight from 'prism-react-renderer/themes/shadesOfPurple'

const CodeBlock = ({ children }) => {
	// if (!children || children.type !== 'code') return null

	const {
		props: { className, children: code = '' },
	} = children

	const language = className ? className.replace(/language-/, '') : ''
  console.log('prism ', className)

	return (
		<Highlight
			{...defaultProps}
			theme={vsLight}
			code={code.trim()}
			language={language}
      className=''
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={`rounded-lg font-code overflow-auto ${className}`} 
					   style={{ ...style, padding: '20px' }}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeBlock
