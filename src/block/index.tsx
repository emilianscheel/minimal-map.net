import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import metadata from '../../block.json';
import type { MapBlockAttributes } from '../types';
import Edit from './edit';
import './editor.scss';

type MinimalMapBlockConfiguration = BlockConfiguration<MapBlockAttributes> & {
	name: string;
};

const blockMetadata = metadata as MinimalMapBlockConfiguration;

registerBlockType<MapBlockAttributes>(blockMetadata.name, {
	...blockMetadata,
	edit: Edit,
	save: () => null,
});
