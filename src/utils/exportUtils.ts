
import { saveAs } from 'file-saver';
import { format } from 'date-fns';

/**
 * Export data to CSV format
 */
export const exportToCSV = (data: any[], filename: string): void => {
  // Convert data to CSV format
  const headers = Object.keys(data[0]);
  const csvContent = [
    // Add headers
    headers.join(','),
    // Add rows
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        // Handle values with commas, quotes, etc.
        return typeof value === 'string' 
          ? `"${value.replace(/"/g, '""')}"` 
          : value;
      }).join(',')
    )
  ].join('\n');

  // Create a blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, `${filename}-${format(new Date(), 'yyyy-MM-dd')}.csv`);
};

/**
 * Export data to PDF format using jspdf and jspdf-autotable
 */
export const exportToPDF = async (
  data: any[],
  filename: string,
  title: string
): Promise<void> => {
  // Dynamic import to reduce bundle size
  const { jsPDF } = await import('jspdf');
  const { default: autoTable } = await import('jspdf-autotable');
  
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(16);
  doc.text(title, 14, 15);
  doc.setFontSize(10);
  doc.text(`Generated on ${format(new Date(), 'MMM dd, yyyy')}`, 14, 22);
  
  // Convert data to table format
  const headers = Object.keys(data[0]);
  const rows = data.map(row => headers.map(header => row[header]));
  
  // Generate table
  autoTable(doc, {
    head: [headers],
    body: rows,
    startY: 30,
    theme: 'grid',
    headStyles: {
      fillColor: [0, 128, 128], // Teal color
      textColor: 255,
      fontStyle: 'bold',
    },
  });
  
  // Save PDF
  doc.save(`${filename}-${format(new Date(), 'yyyy-MM-dd')}.pdf`);
};

