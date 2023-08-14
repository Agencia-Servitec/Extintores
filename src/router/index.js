import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '../components/public';
import {
	Home,
	Page404,
	ContactSuccess,
	PageProducts,
	ServicesExtinguisher,
} from '../pages';

export const Router = ({ onClickVisibleFormContact, visibleFormContact }) => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<BaseLayout onClickVisibleFormContact={onClickVisibleFormContact}>
						<Home
							onClickVisibleFormContact={onClickVisibleFormContact}
							visibleFormContact={visibleFormContact}
						/>
					</BaseLayout>
				}
			/>
			<Route
				exact
				path="/contact-success"
				element={
					<BaseLayout>
						<ContactSuccess />
					</BaseLayout>
				}
			/>
			<Route
				exact
				path="/productos"
				element={
					<BaseLayout onClickVisibleFormContact={onClickVisibleFormContact}>
						<PageProducts
							onClickVisibleFormContact={onClickVisibleFormContact}
							visibleFormContact={visibleFormContact}
						/>
					</BaseLayout>
				}
			/>
			<Route
				exact
				path="/services"
				element={
					<BaseLayout onClickVisibleFormContact={onClickVisibleFormContact}>
						<ServicesExtinguisher
							onClickVisibleFormContact={onClickVisibleFormContact}
							visibleFormContact={visibleFormContact}
						/>
					</BaseLayout>
				}
			/>
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};
