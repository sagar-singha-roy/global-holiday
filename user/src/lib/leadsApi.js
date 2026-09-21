// Lead and Inquiry submission API client for User Portal
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/v1/api';

/**
 * Submit inquiry or custom planner lead to CRM
 * @param {Object} leadData
 * @returns {Promise<{success: boolean, data?: any, message?: string}>}
 */
export async function submitLead(leadData) {
  try {
    const response = await fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Failed to submit lead to CRM:', error);
    return { success: false, message: error.message || 'Network error' };
  }
}
