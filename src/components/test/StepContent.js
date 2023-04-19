import React, { useState } from 'react'
import AddInfo from './steps/addInfo/AddInfo'
import { PhotoUploader } from './steps/photoUploader/PhotoUploader'

function StepContent({ stepIndex }) {
  return (
    <div>
      {stepIndex === 1 && (
        <div>
          <PhotoUploader />
        </div>
      )}
      {stepIndex === 2 && (
        <div>
          <AddInfo />
        </div>
      )}
      {stepIndex === 3 && (
        <div>
          <h1>Step 3</h1>
          <p>This is the content for step 3.</p>
        </div>
      )}
    </div>
  )
}
export default StepContent
