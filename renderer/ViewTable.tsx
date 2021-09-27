import {Renderer} from 'amis';
import {RendererProps} from 'amis/lib/factory';
import React from 'react';

export interface TmsTableRendererProps extends RendererProps {
    target?: string;
}

@Renderer({
    test: /\btms-table$/,
    name: 'tms-table'
})
export default class TmsTable extends React.Component<TmsTableRendererProps> {
    static defaultProps = {
        target: 'world'
    };

    render() {
        const {
            target
        } = this.props;

        return (
            <div>
                <p>hello world,{target}.测试一下一系列的组件</p>
            </div>
        );
    }
}
