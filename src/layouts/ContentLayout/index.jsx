import React from 'react'
import './styles.scss';

function ContentLayout({children}) {
  return (
    <div className="content-layout">
      {children}
    </div>
  )
}

export default ContentLayout
