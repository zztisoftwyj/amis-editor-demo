import {PluginInterface, RendererInfo, RendererScaffoldInfo, ScaffoldForm} from 'amis-editor/dist/plugin';

export interface amisEditorStore {
    subRenderers: SubRendererInfo[];
    setSubRenderers(renderers: Array<SubRendererInfo>): void;
    [key: string]: any;
}

export type editorComponentList = SubRendererInfo[]
export interface SubRendererInfo extends RendererScaffoldInfo {
    /**
     * 首次拖入的时候可以用来配置个表单。
     */
    scaffoldForm?: ScaffoldForm;
    plugin: PluginInterface;
    parent: RendererInfo;
    id: string;
    order: number;
}
