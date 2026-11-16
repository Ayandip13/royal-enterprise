import React, { useState } from 'react';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import { useNotification } from '../../context/NotificationContext';
import {
  submitEventEnquiry,
  submitCateringEnquiry,
  submitWeddingEnquiry,
  submitContactEnquiry,
} from '../../services/api';
import { Calendar, Users, MapPin, DollarSign, Send } from 'lucide-react';
import { AntiqueStar } from '../common/BotanicalDecor';

const QuickQuoteModal = ({ isOpen, onClose }) => {
  const { showToast } = useNotification();
  const [activeTab, setActiveTab] = useState('events');
  const [loading, setLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventCategory: 'Corporate Events',
    eventType: 'Wedding Reception',
    weddingDate: '',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    foodPreference: 'Both / Multi-Cuisine',
    packageType: 'Complete Wedding Package',
    estimatedBudget: '',
    subject: 'General Business Consultation',
    message: '',
    additionalRequirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      eventCategory: 'Corporate Events',
      eventType: 'Wedding Reception',
      weddingDate: '',
      eventDate: '',
      eventLocation: '',
      guestCount: '',
      foodPreference: 'Both / Multi-Cuisine',
      packageType: 'Complete Wedding Package',
      estimatedBudget: '',
      subject: 'General Business Consultation',
      message: '',
      additionalRequirements: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (activeTab === 'events') {
        await submitEventEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          eventCategory: formData.eventCategory,
          eventDate: formData.eventDate,
          eventLocation: formData.eventLocation,
          guestCount: formData.guestCount ? parseInt(formData.guestCount, 10) : undefined,
          servicesRequired: 'Requested via Quick Quote',
          additionalRequirements: formData.additionalRequirements,
        });
      } else if (activeTab === 'catering') {
        await submitCateringEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          eventLocation: formData.eventLocation,
          guestCount: parseInt(formData.guestCount, 10) || 50,
          foodPreference: formData.foodPreference,
          menuRequirements: 'Quick Quote Request',
          additionalRequirements: formData.additionalRequirements,
        });
      } else if (activeTab === 'wedding') {
        await submitWeddingEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          weddingDate: formData.weddingDate || formData.eventDate,
          venuePreference: formData.eventLocation,
          guestCount: parseInt(formData.guestCount, 10) || 200,
          estimatedBudget: formData.estimatedBudget,
          packageType: formData.packageType,
          additionalRequirements: formData.additionalRequirements,
        });
      } else {
        await submitContactEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message || formData.additionalRequirements || 'Quick quote consultation requested.',
        });
      }

      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      resetForm();
      onClose();
    } catch (err) {
      showToast(err.message || 'Submission failed. Please check the fields and try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Get a quote"
      subtitle="Tell us about your event. We will check our kitchen schedule and call you back directly."
      maxWidth="max-w-2xl"
    >
      {/* Division Tabs */}
      <div className="grid grid-cols-3 gap-2 bg-[#FAF5ED] dark:bg-[#102726] p-1.5 rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] mb-6 font-sans">
        <button
          type="button"
          onClick={() => setActiveTab('wedding')}
          className={`py-2 text-xs rounded-lg transition-all font-semibold uppercase tracking-wider ${
            activeTab === 'wedding'
              ? 'bg-[#193C3B] text-white shadow-sm'
              : 'text-[#665C5C] dark:text-[#C8D6D5] hover:text-[#193C3B] dark:hover:text-white'
          }`}
        >
          Weddings
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('catering')}
          className={`py-2 text-xs rounded-lg transition-all font-semibold uppercase tracking-wider ${
            activeTab === 'catering'
              ? 'bg-[#193C3B] text-white shadow-sm'
              : 'text-[#665C5C] dark:text-[#C8D6D5] hover:text-[#193C3B] dark:hover:text-white'
          }`}
        >
          Catering
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('events')}
          className={`py-2 text-xs rounded-lg transition-all font-semibold uppercase tracking-wider ${
            activeTab === 'events'
              ? 'bg-[#193C3B] text-white shadow-sm'
              : 'text-[#665C5C] dark:text-[#C8D6D5] hover:text-[#193C3B] dark:hover:text-white'
          }`}
        >
          Events
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
        {/* Contact info row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="e.g. [Customer Name]"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98310 11474"
            required
          />
        </div>

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. client@example.com"
          required
        />

        {/* Tab-specific fields */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Event Category"
              name="eventCategory"
              value={formData.eventCategory}
              onChange={handleChange}
              options={[
                'Corporate Events',
                'Private Celebrations',
                'Entertainment & Concerts',
                'Public Festivals',
              ]}
              required
            />
            <Input
              label="Event Date"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
            <Input
              label="Event Location / City"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="e.g. Kolkata, Rajbari Bawali"
              required
            />
            <Input
              label="Estimated Guest Count"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 250"
            />
          </div>
        )}

        {activeTab === 'catering' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Event Occasion"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              placeholder="e.g. Reception, Annaprashan"
              required
            />
            <Input
              label="Event Date"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
            <Input
              label="Guest Count"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 500"
              required
            />
            <Select
              label="Dietary Focus"
              name="foodPreference"
              value={formData.foodPreference}
              onChange={handleChange}
              options={[
                'Both / Multi-Cuisine',
                'Traditional Bengali (Fish & Mutton)',
                '100% Pure Vegetarian / Jain',
                'Awadhi & Dum Biryani Focus',
              ]}
              required
            />
          </div>
        )}

        {activeTab === 'wedding' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Target Wedding Date"
              name="weddingDate"
              type="date"
              value={formData.weddingDate}
              onChange={handleChange}
              required
            />
            <Input
              label="Preferred Destination / Venue"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="e.g. Kolkata Rajbari, Heritage Resort"
            />
            <Input
              label="Estimated Guest Count"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 400"
              required
            />
          </div>
        )}

        <Textarea
          label="Additional Details or Special Requests"
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleChange}
          placeholder="Share any specific dates, theme concepts, culinary preferences or budget ranges..."
          rows={3}
        />

        <div className="pt-2 flex items-center justify-end space-x-3">
          <Button variant="ghost" size="sm" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-md inline-flex items-center space-x-2 transition-all"
          >
            <span>{loading ? 'Submitting...' : 'Submit Enquiry'}</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default QuickQuoteModal;
