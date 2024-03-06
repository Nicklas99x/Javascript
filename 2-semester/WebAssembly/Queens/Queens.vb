Imports System

Module Program
  Dim noOfQueens As Long, queens(32) As Long, noOfSolutions As Long, time As Double, fastLegalCounter As Long
  Dim columnOccupied(32) As Boolean, venstreDiagOccupied(64) As Boolean, hojreDiagOccupied(64) As Boolean
  Sub Main(args As String())
    Dim i As Integer
    If args.Length = 1 Then noOfQueens = Val(args(0)) Else noOfQueens = 14
    Console.WriteLine("Beregner")
    For i = 1 To 10
      time = Timer
      fasterPositionQueens()
      time = (Timer - time) ' * 86400
      Console.WriteLine(i & ". " & noOfSolutions & ". " & time & ". " & fastLegalCounter)
    Next
  End Sub
  Sub fasterPositionQueens()
    Dim row As Long, col As Long, minus1 As Long
    row = 0 : col = 0 : minus1 = noOfQueens - 1 : noOfSolutions = 0 : fastLegalCounter = 0
NyRaekke:
    columnOccupied(col) = True
    venstreDiagOccupied(row + col) = True
    hojreDiagOccupied(row + minus1 - col) = True
    queens(row) = col : row += 1 : col = 0
Igen2:
    fastLegalCounter = fastLegalCounter + 1
    If columnOccupied(col) Then
      col += 1
      If col < noOfQueens Then GoTo Igen2 Else GoTo Videre
    End If
    If venstreDiagOccupied(row + col) Then
      col += 1
      If col < noOfQueens Then GoTo Igen2 Else GoTo Videre
    End If
    If hojreDiagOccupied(row + minus1 - col) Then
      col += 1
      If col < noOfQueens Then GoTo Igen2 Else GoTo Videre
    End If
    If row >= minus1 Then noOfSolutions += 1 Else GoTo NyRaekke
Videre:
    If row > 0 Then
      row -= 1 : col = queens(row)
      columnOccupied(col) = False
      venstreDiagOccupied(row + col) = False
      hojreDiagOccupied(row + minus1 - col) = False
      If col = minus1 Then GoTo Videre
      col += 1
      If row = 0 Then GoTo NyRaekke Else GoTo Igen2
    End If
  End Sub

End Module
