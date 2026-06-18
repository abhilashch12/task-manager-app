import {useTheme} from "../context/ThemeContext"
function NavBar(){
const {theme,toggleTheme} = useTheme();

    return(
        <div>
            <h1>TASK MANAGER</h1>
            <button onClick={toggleTheme}>{theme==="light"?"dark":"light"}</button>
        </div>
    )
}
export default NavBar;