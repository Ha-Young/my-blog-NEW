import React, { useCallback, useEffect } from 'react'
import Switch from 'react-switch'
import * as Storage from '../../../utils/storage'
import { EFFECT, className } from '../../../constants'
import { useFirework } from '../../../hooks/useFirework'

import './index.scss'

function getChecked(effect) {
  return effect === EFFECT.FIREWORK ? true : false
}

function getEffect(checked) {
  return checked ? EFFECT.FIREWORK : EFFECT.NOMAL
}

export const EffectSwitch = () => {
  const effect = Storage.getEffect(EFFECT.FIREWORK)
  const storedActive = getChecked(effect)

  const [checked, setChecked] = useFirework(className.canvas_name, storedActive)

  const handleChange = useCallback(checked => {
    const effect = getEffect(checked)
    Storage.setEffect(effect)
    setChecked(checked)
  })

  return (
    <div htmlFor="effect-switch">
      <Switch
        onChange={handleChange}
        checked={checked}
        id="effect-switch"
        height={24}
        width={48}
        checkedIcon={<div className="icon nomalIcon" />}
        uncheckedIcon={<div className="icon fireworkIcon" />}
        offColor={'#A8BAA9'}
        offHandleColor={'#fff'}
        onColor={'#A8BAA9'}
        onHandleColor={'#282c35'}
      />
    </div>
  )
}
