const ActionTypes = {
    UPDATE_CURRENCY: "[Currency] Update Currency",
  };
  
const updateCurrency = (code:string) => {
    return {
      type: ActionTypes.UPDATE_CURRENCY,
      code,
    };
  };
  
  export default { updateCurrency, ActionTypes };
  