import * as Yup from 'yup';

export const commentsSchema = Yup.object().shape({
	comment: Yup.string().required('Requerido'),
});

export const commentsInitialValues = {
	comment: '',
};
