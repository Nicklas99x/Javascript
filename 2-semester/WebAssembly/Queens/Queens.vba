Option Explicit
Dim noOfQueens As Long, queens(32) As Long, noOfSolutions As Long, time As Double, fastLegalCounter As Long
Dim columnOccupied(32) As Boolean, venstreDiagOccupied(64) As Boolean, hojreDiagOccupied(64) As Boolean
Sub findNoOfSolutions(it As Integer)
Dim i As Integer, zx As crt
Set zx = CreateCRT
For i = 1 To it
  noOfQueens = 14
  time = Timer
  fasterPositionQueens
  time = (Timer - time) ' * 86400
  zx.crtWriteLn i, noOfSolutions, time, fastLegalCounter
Next
End Sub
Sub testSolver()
findNoOfSolutions 10
End Sub
Sub fasterPositionQueens()
Dim row As Long, col As Long, minus1 As Long
row = 0: col = 0: minus1 = noOfQueens - 1: noOfSolutions = 0: fastLegalCounter = 0
NyRaekke:
columnOccupied(col) = True
venstreDiagOccupied(row + col) = True
hojreDiagOccupied(row + minus1 - col) = True
queens(row) = col: row = row + 1: col = 0
Igen2:
fastLegalCounter = fastLegalCounter + 1
If columnOccupied(col) Then
  col = col + 1
  If col < noOfQueens Then GoTo Igen2 Else GoTo Videre
End If
If venstreDiagOccupied(row + col) Then
  col = col + 1
  If col < noOfQueens Then GoTo Igen2 Else GoTo Videre
End If
If hojreDiagOccupied(row + minus1 - col) Then
  col = col + 1
  If col < noOfQueens Then GoTo Igen2 Else GoTo Videre
End If
If row >= minus1 Then noOfSolutions = noOfSolutions + 1 Else GoTo NyRaekke
Videre:
If row > 0 Then
  row = row - 1: col = queens(row)
  columnOccupied(col) = False
  venstreDiagOccupied(row + col) = False
  hojreDiagOccupied(row + minus1 - col) = False
  If col = minus1 Then GoTo Videre
  col = col + 1
  If row = 0 Then GoTo NyRaekke Else GoTo Igen2
End If
End Sub
