import { registerBlockType } from '@wordpress/blocks';
 
import {
    useBlockProps,
    RichText,
    AlignmentToolbar,
    BlockControls,
} from '@wordpress/block-editor';
 
registerBlockType( 'create-block/gutenbergrichtext', {
    apiVersion: 2,
    title: 'Gutenberg Custom Rich Text',
    icon: 'universal-access-alt',
    category: 'common',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
    },
    example: {
        attributes: {
            content: 'Hello World',
            alignment: 'right',
        },
    },
    edit: ( { attributes, setAttributes } ) => {
        const onChangeContent = ( newContent ) => {
            setAttributes( { content: newContent } );
        };
 
        const onChangeAlignment = ( newAlignment ) => {
            setAttributes( {
                alignment: newAlignment === undefined ? 'none' : newAlignment,
            } );
        };
 
        return (
            <div { ...useBlockProps() }>
                {
                    <BlockControls>
                        <AlignmentToolbar
                            value={ attributes.alignment }
                            onChange={ onChangeAlignment }
                        />
                    </BlockControls>
                }
                <RichText
                    className={ attributes.className }
                    style={ { textAlign: attributes.alignment } }
                    tagName="p"
                    onChange={ onChangeContent }
                    value={ attributes.content }
                />
            </div>
        );
    },
    save: ( props ) => {
        const blockProps = useBlockProps.save();
 
        return (
            <div { ...blockProps }>
                <RichText.Content
                    className={ `gutenberg-examples-align-${ props.attributes.alignment }` }
                    tagName="p"
                    value={ props.attributes.content }
                />
            </div>
        );
    },
} );