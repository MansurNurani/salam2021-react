import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text1 , text2}) => {
  React.useEffect
  return <div className={styles.test}>Example Component: {text1 +"__A__"+text2}</div>
}
