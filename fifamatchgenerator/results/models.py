from django.db import models;
from django.contrib.auth.models import User;

class Result(models.Model):
    opponentName = models.CharField(max_length=100)
    myTeam = models.CharField(max_length=100)
    opponentTeam = models.CharField(max_length=100)
    myGoals = models.PositiveSmallIntegerField()
    opponentGoals = models.PositiveSmallIntegerField()
    notes = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="results", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)