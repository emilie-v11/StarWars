import { Field } from '@/utils/helpers';
import List from '@mui/material/List';
import InformationItem from './InformationItem';

/**
 * InformationSheet Component who contain the data information details for one person by ID
 * @property {object} person -Object of the current person in details page
 */

interface InformationSheetProps {
	/** Tableau de champs {label, value} à afficher */
	person?: Field[], //Array<{ label: string; value: string }>;
}

const InformationSheet = ({ person = [] }: InformationSheetProps) => {
	return (
		<List sx={{ position: 'relative', zIndex: 3, opacity: 1 }}>
			{person?.map((item) => (
				<InformationItem
					key={item.label}
					label={String(item.label)}
					value={String(item.value)}
				/>
			))}
		</List>
	);
};

export default InformationSheet;
