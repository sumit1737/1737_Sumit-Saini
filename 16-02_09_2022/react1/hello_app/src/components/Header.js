// Uppercase of Header.js's H is naming convention
const Header = (prop) => {
    return (
        <header>
            <h1>Hello Header {prop.title}</h1>
            
        </header>
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