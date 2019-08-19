import React from 'react';
//import i18n from './i18n';
import { Translation } from 'react-i18next';

export const Trad = ({ text }) =>
	<Translation>{t=>t(
		text
	)}</Translation>

