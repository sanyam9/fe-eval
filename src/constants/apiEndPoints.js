export const BACKEND_URL = 'http://localhost:8000/api';
export const GET_EVENTS = {
  url: 'events',
  method: 'GET',
};

export const UPDATE_RECORD_LIKE = (id) => ({
  url: `events/${id}`,
  method: 'PATCH',
});

export const GET_EVENT_BY_ID = (id) => ({
  url: `events/${id}`,
  method: 'GET',
})
