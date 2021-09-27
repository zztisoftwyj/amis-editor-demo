/**
 * @file entry of this example.
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {editorComponentList} from './editor-type';

declare global {
    interface Window {
        filterRenderComponent: (store: editorComponentList) => editorComponentList;
    }
}


window.filterRenderComponent = (componentList: editorComponentList) => {
    console.log(componentList);
    // 可以过滤掉不需要的元素
    const filterList = ['公式', '音频', '视频', '代码编辑器'];
    const showList = componentList.filter((item) => !filterList.includes(item.name));
    return showList;
};

export function bootstrap(mountTo: HTMLElement) {
    ReactDom.render(<App />, mountTo);
}
