import type { AdminAppConfig, AdminSection } from '../../types';
import type { AdminSectionMap } from '../app-config';

export interface AdminSectionComponentProps {
	activeSection: AdminSection;
	appConfig: AdminAppConfig;
	sectionMap: AdminSectionMap;
}
