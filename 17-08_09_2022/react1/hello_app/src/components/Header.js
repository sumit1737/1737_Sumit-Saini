import Button from "./Button";
// Uppercase of Header.js's H is naming convention
const Header = (prop) => {
    const onClick = (e) => {
        console.log('Click', e);
    }
    return (
        <div>
            <header>
                <h1>Hello Header {prop.title}</h1>
                <Button text='Hello1' onClick1={onClick} ></Button>
            </header>
            
        </div>
    )
}

// const Header = ({title}) => {
//     return (
//         <header>
//             <h1>Hello Header {title}</h1>
//         </header>
//     )
// }

// const Qwerty = () => {
//     return (
//         <header>
//             <h1>Hello Header</h1>
//         </header>
//     )
// }

Header.defaultProps = {
    title: 'Yo Yo',
  }
  
export default Header;
// export default Qwerty; // ye nhi krne ka