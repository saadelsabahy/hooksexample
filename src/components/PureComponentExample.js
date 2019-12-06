import React, { Component, PureComponent } from 'react';

const Temp = ({ value }) => {
   console.log('Temp render');
   return <div>{value}</div>;
};

class PureComponentExample extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         val: 1,
      };
   }
   componentDidMount() {
      setInterval(() => {
         this.setState({ val: 1 });
      }, 2000);
   }

   /*  shouldComponentUpdate(nextProps, nextState) {
      return this.state.val === nextState.val ? false : true;
   } */
   render() {
      console.log('App render');

      return <Temp value={1} />;
   }
}

export default PureComponentExample;
