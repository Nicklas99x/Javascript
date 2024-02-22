<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Herpetolog Data</title>
        <style>
          table {
            border-collapse: collapse;
            width: 50%;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h2>Herpetolog Data</h2>
        <table>
          <tr>
            <th>Navn</th>
            <th>Specialisering</th>
            <th>Fødselsdato</th>
            <th>Arbejdssted</th>
            <th>Email</th>
          </tr>
          <xsl:apply-templates select="herpetolog"/>
        </table>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="herpetolog">
    <tr>
      <td><xsl:value-of select="navn"/></td>
      <td><xsl:value-of select="specialisering"/></td>
      <td><xsl:value-of select="foedselsdato"/></td>
      <td><xsl:value-of select="arbejdssted"/></td>
      <td><xsl:value-of select="email"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>