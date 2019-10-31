module.exports = `
@keyframes hhm-loading {
    from { transform: rotate(360deg) } to { transform: rotate(0) }
}

@keyframes hhm-btn-loading {
    from { transform: rotate(0) } to { transform: rotate(360deg) }
}

.hhm-btn-circle:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border: 10px solid transparent;
    border-right-color: #F3F3F3;
}

.hhm-bar-list::-webkit-scrollbar{ display: none; }


.hhm-bar-item:active {
    background: #F7F8FA;
}

`;