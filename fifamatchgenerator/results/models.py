from django.db import models

class Result(models.Model):
    opponentName = models.CharField(max_length=100)
    myTeam = models.CharField(max_length=100)
    opponentTeam = models.CharField(max_length=100)
    myGoals = models.PositiveSmallIntegerField()
    opponentGoals = models.PositiveSmallIntegerField()
    notes = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)