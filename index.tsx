/**
 * @file entry of this example.
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {amisEditorStore} from './editor-type';

declare global {
    interface Window {
        filterRenderComponent: (store: amisEditorStore) => amisEditorStore;
    }
}


window.filterRenderComponent = (amisStore: amisEditorStore) => {
    console.log(amisStore);
    // 可以过滤掉不需要的元素
    const filterList = ['公式','音频','视频','代码编辑器'];
    const showList = amisStore.subRenderers.filter((item) => !filterList.includes(item.name));
    amisStore.setSubRenderers(showList);
    return amisStore;
};

export function bootstrap(mountTo: HTMLElement) {
    ReactDom.render(<App />, mountTo);
}
