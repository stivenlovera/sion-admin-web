import React from 'react'
import { ISubModulos } from '../../../../services/Intefaces/IAuthenticacion';
import { useOutletContext } from 'react-router-dom';

const Incentivo = () => {
  const context: ISubModulos = useOutletContext();
  //console.log('recibiendo route en component', context)
  const validateComponent = (component: string) => {
    const validate = context.funcionalidad.find(x => x == component);
    if (validate != undefined) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div>
      <h5>INCENTIVOS</h5>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi tempore praesentium minus provident voluptas neque quam deserunt inventore, doloribus magnam beatae excepturi ut eum, voluptate asperiores. Maxime, cupiditate veniam?
      <div hidden={validateComponent('component a')} style={{ background: 'red', padding: 80 }}>
        component a
      </div>
      <div hidden={validateComponent('component b')} style={{ background: 'yellow', padding: 80 }}>
        component b
      </div>
      <div hidden={validateComponent('component c')} style={{ background: 'blue', padding: 80 }}>
        component c
      </div>
    </div>
  )
}

export default Incentivo
