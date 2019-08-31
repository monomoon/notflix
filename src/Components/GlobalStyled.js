import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const globalStyleds = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-Arial, Helvetica, sans-serif;
        font-size:14;
        background-color:rgba(20,20,20,1);
        color: white;
        padding-top: 80px;
    }
`;

export default globalStyleds;