import axios from 'axios';

export const fetchStartups = async () =>
  axios.get(process.env.REACT_APP_BASE_URL + 'startup/');

export const createStartup = async (startup) =>
  axios.post(process.env.REACT_APP_BASE_URL + 'startup/', startup);

export const updateStartup = async (selectedId, startup) =>
  axios.patch(
    process.env.REACT_APP_BASE_URL + `startup/${selectedId}`,
    startup
  );

export const deleteStartup = async (startupId) =>
  axios.delete(process.env.REACT_APP_BASE_URL + `startup/${startupId}`);

export const createFounder = async (startupId, founder) =>
  axios.post(process.env.REACT_APP_BASE_URL + `founder/${startupId}`, founder);
