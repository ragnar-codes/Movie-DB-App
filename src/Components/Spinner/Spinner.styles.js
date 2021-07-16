import styled from 'styled-components';

export const Spinner = styled.div `
    border: 5px solid #eee;
    border-top: 5px solid #353535;
    border-radius :50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    :hover {
        opacity: 0.8;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg)
        }
    }


`;