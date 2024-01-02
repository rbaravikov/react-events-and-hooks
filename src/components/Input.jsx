const Input = ({handleChangeInput, value}) => {

  return (
    <input onChange={handleChangeInput} type="text" name="work" placeholder="Add work here" value={value}/>
  )
}

export default Input